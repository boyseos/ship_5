package com.ship.web.pxy;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.BiFunction;
import java.util.function.Function;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.ship.web.board.Article;
import com.ship.web.board.ArticleMapper;
import com.ship.web.cmm.IFunction;
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
	private List<Article> listArr;
	private String search;
	private final int BLOCK_SIZE = 5;
	@Autowired ArticleMapper articleMapper;
	
	public void paging() {
		ISupplier<Integer> s = () -> articleMapper.allBoardCount();//이미 시작될때 실행된 결과값을 가져온다. 그래서 뉴때리면 없어진다..?
		int totalCount = s.get(),blockCount=0,blockNum=0,startPage=0,endPage=0;
		blockCount = (totalCount-1)/(pageSize*BLOCK_SIZE)+1;
		pageCount = (totalCount-1) / pageSize +1;
		pageNum = (pageCount < pageNum) ? pageCount :
					pageNum <=0 ? 1 : pageNum;
		blockNum = (pageNum-1) / BLOCK_SIZE;
		startRow = pageSize * (pageNum-1);
		endRow = (pageCount != pageNum) ? (pageSize * pageNum)-1 : totalCount -1;
		startPage = blockNum * BLOCK_SIZE + 1;
		//endPage = ((blockNum+1) != blockCount) ? startPage + (BLOCK_SIZE-1) : pageCount;
		endPage = (blockNum+1) * BLOCK_SIZE;
		endPage = endPage > pageCount ? pageCount : endPage;
		boolean existPrev = blockNum == 0;
		boolean existNext = blockNum == blockCount -1;
		List<Integer> x = new ArrayList<>();
		for(int i = endPage; startPage<= i; i--) {
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
	
	public int ran(int a, int b) {
		BiFunction<Integer, Integer, Integer> f = (x,y) ->(int)(Math.random()*y)+x;
		return f.apply(a, b);
	}
}
