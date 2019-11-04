package com.ship.web.test;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

public class Crawler {
	public static void main(String[] args) {
		String url = "http://google.co.kr/";
		url = "https://www.naver.com";
		try {
			Connection.Response response = Jsoup.connect(url)
											.method(Connection.Method.GET)
											.execute();
			Document document = response.parse();
			//String text = document.html();
			String text = document.text();
			System.out.println(text);
		} catch (Exception e2) {
			// TODO Auto-generated catch block
			e2.printStackTrace();
		}
		
	}

	
}