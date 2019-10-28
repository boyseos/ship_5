package com.ship.web.board;

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

@RestController
@RequestMapping("/articles")
public class ArticleCtrl {
	private static final Logger logger = LoggerFactory.getLogger(ArticleCtrl.class);
	@Autowired Map<String, Object> map;
	@Autowired Article art;
	@Autowired ArticleMapper articleMapper;
	@PostMapping("/")
	public Map<?,?> write(@RequestBody Article param) {
		logger.info("글쓰기 내용{}", param);
		IConsumer<Article> c = x -> articleMapper.insertArticle(param);
		c.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	
	
	@GetMapping("/{artseq}")//패스배러블 설정을 해주면 바뀔수 있는 부분이라는 뜻이다.
	public Article read(@PathVariable String articseq, @RequestBody Article param){
		logger.info("글찾기{}", param.getMain());
		//ISupplier<Article> xx =  -> userMapper.searchBoard();
		return param;
	}
	
	@PutMapping("/{artseq}")
	public Article modify(@PathVariable String articseq, @RequestBody Article param){
		logger.info("글찾기{}", param.getMain());
		//ISupplier<Article> xx =  -> userMapper.searchBoard();
		return param;
	}
	
	@DeleteMapping("/{artseq}")
	public Article delete(@PathVariable String articseq, @RequestBody Article param){
		logger.info("글찾기{}", param.getMain());
		//ISupplier<Article> xx =  -> userMapper.searchBoard();
		return param;
	}
}
