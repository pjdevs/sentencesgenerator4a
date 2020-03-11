package fr.pjdevs.sentencesgenerator;

import android.app.*;
import android.os.*;
import android.webkit.*;
import android.speech.tts.*;
import java.util.*;
import android.widget.*;
import android.view.*;

public class MainActivity extends Activity 
{
	class MyJavaInterface {

		TextToSpeech speech;
        WebView mAppView;
		
		public MyJavaInterface(WebView appView) {
			this.mAppView = appView;
			this.speech = new TextToSpeech(mAppView.getContext(), new TextToSpeech.OnInitListener() {
					@Override
					public void onInit(int status) {
						if(status != TextToSpeech.ERROR) {
							speech.setLanguage(Locale.FRANCE);
						} else {
							Toast.makeText(mAppView.getContext(), "Error with speech synthesis", Toast.LENGTH_LONG);
						}
					}
				});
		}

		@JavascriptInterface
		public void speak(String text){
			speech.speak(text, TextToSpeech.QUEUE_FLUSH, null);
		}
	}
	
	MyJavaInterface intface;
	
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
		requestWindowFeature(Window.FEATURE_NO_TITLE);
        setContentView(R.layout.main);
		
		WebView webview = findViewById(R.id.webview);
		WebSettings settings = webview.getSettings();
		settings.setJavaScriptEnabled(true);
		settings.setDomStorageEnabled(true);
		webview.setWebChromeClient(new WebChromeClient());
		
		intface = new MyJavaInterface(webview);
		webview.addJavascriptInterface(intface, "Android");
		
		webview.loadUrl("file:///android_asset/index.html");
	}
}
