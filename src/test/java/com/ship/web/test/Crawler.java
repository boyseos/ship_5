package com.ship.web.test;
import java.util.regex.Pattern;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.mysql.cj.xdevapi.JsonParser;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.io.BufferedReader;
import java.io.IOException;

public class Crawler {
	public static void main(String[] args) throws IOException {
		String url = "https://map.naver.com/v5/api/search?caller=pcweb&query=풋살장&type=all&page=1&displayCount=100&lang=ko";
		Document rawData = Jsoup.connect(url).timeout(10*1000)
				.ignoreContentType(true)
				.get();
		Elements address = rawData.select("address");
		List<String> adrList = new ArrayList<String>();
		for (Element e : address) {
			adrList.add(e.html());
		}
		System.out.println(adrList);
		//JSONParser jsonParse = new JSONParser();
		//System.out.println(rawData.attr("name","name"));
		JsonParser jsonParser = new JsonParser();
		String patern = "name : .*?";
		String input = rawData.text();
		System.out.println(input);
		Pattern ptn = Pattern.compile("^[a-zA-Z]+([0-9]+).*"); 
		Matcher matcher = ptn.matcher(input);
		System.out.println(matcher.groupCount());
		while(matcher.find()){
			System.out.println(matcher.toString()); 
		}
		
		
	}
}
