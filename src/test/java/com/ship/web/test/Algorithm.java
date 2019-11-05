package com.ship.web.test;

public class Algorithm {
	public static void main(String[] args) {
		int	pageSize=5, blockSize=5, pageNum=7,totalCount=137,
		startRow = 0,endRow=0,pageCount=0,blockCount=0,startPage=0,endPage=0,blockNum=0;
		pageCount = (totalCount / pageSize)+1;
		blockCount = totalCount/(pageSize*blockSize)+1;
		blockNum = (pageNum / blockSize);
		startRow = pageSize * (pageNum-1);
		endRow = (pageCount != pageNum) ? (pageSize * pageNum)-1 : totalCount -1;
		startPage = blockNum * 5+1;
		endPage = (blockNum+1) * 5;
		System.out.printf(
				"totalCount = %d\n"+
				"pageSize = %d\n"+
				"pageNum = %d\n"+
				"-----------------\n"+
				"pageCount = %d\n"+
				"blockCount = %d\n"+
				"blockNum = %d\n"+
				"startRow = %d\n"+
				"endRow = %d\n"+
				"startPage = %d\n"+
				"endPage = %d\n"
				,totalCount,pageSize,pageNum,pageCount,blockCount,blockNum,startRow,endRow,startPage,endPage
				);
	}
}
