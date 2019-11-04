package com.ship.web.aop;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @Component @Lazy
@AllArgsConstructor
@NoArgsConstructor
public class Proxy {
	private int pageNum;
	private String search;
	//@Autowired List<String> proxyList;
	
	public List<?> crawl(String site, String search){
		System.out.println(site);
		String url = "https://"+(site.matches("(.*?)naver(.*?)") ? 
				"search.naver.com/search.naver?query=" : site+"/search?q=")+search;
		List<String> proxyList = new ArrayList<String>();
		proxyList.clear();
		try {
			Connection.Response response = Jsoup.connect(url)
											.method(Connection.Method.GET)
											.execute();
			Document document = response.parse();
			String text = document.html();
			proxyList.add(text);
		} catch (Exception e2) {
			e2.printStackTrace();
		}
		return proxyList;
	}	
}