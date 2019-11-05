package com.ship.web.pxy;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.ship.web.board.ArticleMapper;
import com.ship.web.cmm.ISupplier;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component @Data @Lazy
@AllArgsConstructor
@NoArgsConstructor
public class Proxy {
	private int startRow, pageSize, pageNum, pageCount, endRow;
	private List<Integer> pageArr;
	private String search;
	private final int BLOCK_SIZE = 5;
	@Autowired ArticleMapper articleMapper;
	
	public void paging() {
		ISupplier<Integer> s = () -> articleMapper.allBoardCount();
		int totalCount = s.get();
		startRow = pageSize * (pageNum-1);
		endRow = (pageCount != pageNum) ? (pageSize * pageNum)-1 : totalCount -1;
		pageCount = (totalCount / pageSize)+1;
		int blockCount = totalCount/(pageSize*BLOCK_SIZE)+1,
				blockNum = (pageNum / BLOCK_SIZE);
		startRow = pageSize * (pageNum-1);
		endRow = (pageCount != pageNum) ? (pageSize * pageNum)-1 : totalCount -1;
		int startPage = blockNum * 5+1;
		int endPage = (blockNum+1) * 5;
		boolean existPrev = false;
		boolean nextPrev = false;
		List<Integer> x = new ArrayList<>();
		for(int i = startPage; i< endPage; i++) {
			x.add(i);
		}
		pageArr = x;
	}
	
	public int parseInt(String param) {
		Function<String, Integer> f = x -> Integer.parseInt(x);
		return f.apply(param);
	}
	
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
