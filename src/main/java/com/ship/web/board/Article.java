package com.ship.web.board;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @ Component
@AllArgsConstructor
@NoArgsConstructor
public class Article {
	private String main, uid, artseq, title, content;
}
