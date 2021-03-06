package com.ship.web.lambda;

import java.util.ArrayList;
import java.util.List;
import java.util.function.*;

public class LambdaSingle {
	public static void main(String[] args) {
		List<Integer> list = new ArrayList<Integer>();
		
		Supplier<Integer> s = () -> (int)(Math.random()*100)+1;
		makeRandomList(s, list);
		System.out.println(list);
		//1번째줄
		Consumer<Integer> c = i -> System.out.print(i+",");
		Predicate<Integer> p = i -> i%2 == 0;
		printEvenNum(p, c, list);
		System.out.println();
		//2번째줄 위에서만든 list가 필요
		Function<Integer, Integer> f = i -> i/10*10;
		List<Integer> newList = doSomething(f, list);
		System.out.println(newList);
		//마찬가지로 list사용.
	}
	
	
	static <T> void makeRandomList(Supplier<T> s, List<T> list) { 
		for(int i = 0; i < 10; i++)	list.add(s.get());
	}
	
	static <T> void printEvenNum(Predicate<T> p, Consumer<T> c, List<T> list) {
		System.out.print("[");
		for(T i : list)	if(p.test(i)) c.accept(i);
		System.out.println("]");
	}
	
	static <T> List<T> doSomething(Function<T, T> f, List<T> list){
		List<T> newList = new ArrayList<T>(list.size());
		
		for(T i : list) newList.add(f.apply(i));
		return newList;
	}
}
