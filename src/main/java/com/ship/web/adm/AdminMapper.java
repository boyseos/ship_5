package com.ship.web.adm;

import org.springframework.stereotype.Repository;

@Repository
public interface AdminMapper {

	public Admin searchAdminByIdPw(Admin param);
	
}
