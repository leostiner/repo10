package com.pinyougou.sellergoods.service;

import com.pinyougou.pojo.TbBrand;
import entity.PageResult;

import java.util.List;

//品牌服务接口

public interface BrandService {
    //查询所有品牌
    List<TbBrand> findAll();

    //分页查询
    PageResult findPage(int pageNum, int pageSize);//pageNum为当前页码，pageSize为每页显示的条数

    //增加品牌
    void add(TbBrand brand);

    //修改品牌
    void update(TbBrand brand);

    //根据id查询
    TbBrand findOne(long id);

    //批量删除
    void delete(long[] ids);

    //复杂条件查询，并完成分页
    PageResult search(TbBrand brand, int pageNum, int pageSize);
}
