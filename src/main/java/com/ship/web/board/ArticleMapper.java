package com.ship.web.board;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface ArticleMapper {
	public void insertArticle(Article param);
	public int countUserArticle(String param);
	public Article userArticleList(Article param);
	public String allBoardCount();
	public List<Article> selectAll();
	public int update(Article param);
	//public void delete(Article param);
	public int delete(Article param);
	public List<Article> selectPage(Map<String, String> x);
}
