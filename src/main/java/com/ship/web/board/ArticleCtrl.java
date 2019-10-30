package com.ship.web.board;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ship.web.cmm.IConsumer;
import com.ship.web.cmm.IFunction;
import com.ship.web.cmm.ISupplier;

@RestController
@RequestMapping("/articles")
public class ArticleCtrl {
	private static final Logger logger = LoggerFactory.getLogger(ArticleCtrl.class);
	@Autowired Map<String, Object> map;
	@Autowired Article art;
	@Autowired ArticleMapper articleMapper;
	@Autowired List<Article> list;
	
	@PostMapping("/")
	public Map<?,?> write(@RequestBody Article param) {
		logger.info("글쓰기 내용{}", param);
		IConsumer<Article> c = x -> articleMapper.insertArticle(param);
		c.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	
	@GetMapping("/count")//패스배러블 설정을 해주면 바뀔수 있는 부분이라는 뜻이다.
	public Map<?,?> allBoardcount(){
		ISupplier<String> g = () -> articleMapper.allBoardCount();
		String result = g.get();
		logger.info("글찾기 = {}", result);
		map.clear();
		map.put("count", result);
		return map;
	}
	
	@GetMapping("/list")//패스배러블 설정을 해주면 바뀔수 있는 부분이라는 뜻이다.
	public List<Article> allBoardList(){
		list.clear();
		ISupplier<List<Article>> g = () -> articleMapper.selectAll();
		list = g.get();
		String result = ""; 
		for(Article x : list) result += "글찾기 = "+ x.toString() +"\n";
		logger.info(result);
		return list;
	}
	
	@GetMapping("/{uid}/count")//패스배러블 설정을 해주면 바뀔수 있는 부분이라는 뜻이다.
	public Map<?,?> myBoardCount(@PathVariable String uid){
		IFunction<String, Integer> g = x -> articleMapper.countUserArticle(uid);
		int result = g.apply(uid);
		logger.info("글찾기 = {}", result);
		map.clear();
		map.put("count", result);
		return map;
	}
	
	@GetMapping("/{uid}/list")//패스배러블 설정을 해주면 바뀔수 있는 부분이라는 뜻이다.
	public Map<?,?> myBoardList(@PathVariable String uid){
		IFunction<String, Integer> g = x -> articleMapper.countUserArticle(uid);
		int result = g.apply(uid);
		logger.info("글찾기 = {}", result);
		map.clear();
		map.put("count", result);
		return map;
	}
	
	@PutMapping("/{artseq}")
	public Article modify(@PathVariable String artseq, @RequestBody Article param){
		logger.info("글수정{}", param);
		IConsumer<Article> u = x -> articleMapper.update(param);
		u.accept(param);
		return param;
	}
	
	@DeleteMapping("/{artseq}")
	public Article delete(@PathVariable String artseq, @RequestBody Article param){
		logger.info("글삭제 = {}", param);
		IConsumer<Article> d = (x -> articleMapper.delete(param));
		d.accept(param);
		return param;
	}
}
