package com.ship.web.usr;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data @Component
@AllArgsConstructor //뭘 만든다고!?
@NoArgsConstructor  //
@Lazy
public class User{
	private String uid, uname, upw, age, gender, loc, tel, email,
    upoint, score, mvp, win, hitmap, km, heart, author, lolname;
}

