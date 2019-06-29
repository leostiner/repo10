package com.pinyougou.sellergoods.service.impl;

import com.alibaba.dubbo.config.annotation.Service;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.pinyougou.mapper.TbBrandMapper;
import com.pinyougou.pojo.TbBrand;
import com.pinyougou.pojo.TbBrandExample;
import com.pinyougou.sellergoods.service.BrandService;
import entity.PageResult;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

//品牌服务实现类

@Service
public class BrandServiceImpl implements BrandService {

    @Autowired
    private TbBrandMapper tbBrandMapper;

    //查询所有
    @Override
    public List<TbBrand> findAll() {
        return tbBrandMapper.selectByExample(null);
    }

    //分页查询
    @Override
    public PageResult findPage(int pageNum, int pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        Page<TbBrand> page = (Page<TbBrand>) tbBrandMapper.selectByExample(null);
        return new PageResult(page.getTotal() , page.getResult());
    }

    //添加品牌
    @Override
    public void add(TbBrand brand) {
        tbBrandMapper.insert(brand);
    }

    //修改品牌
    @Override
    public void update(TbBrand brand) {
        tbBrandMapper.updateByPrimaryKey(brand);
    }

    //根据id查询品牌
    @Override
    public TbBrand findOne(long id) {
        return tbBrandMapper.selectByPrimaryKey(id);
    }

    //删除品牌
    @Override
    public void delete(long[] ids) {
        for (long id : ids) {
            tbBrandMapper.deleteByPrimaryKey(id);
        }
    }

    //复杂条件查询，并分页
    @Override
    public PageResult search(TbBrand brand, int pageNum, int pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        TbBrandExample example = new TbBrandExample();
        TbBrandExample.Criteria criteria = example.createCriteria();
        if (brand != null) {
            if (brand.getName() != null && brand.getName().length() > 0) {
                criteria.andNameLike("%" + brand.getName() + "%");
            }
            if (brand.getFirstChar() != null && brand.getFirstChar().length() == 1) {
                criteria.andFirstCharLike(brand.getFirstChar());
            }
        }
            Page<TbBrand> page = (Page<TbBrand>) tbBrandMapper.selectByExample(example);
        return new PageResult(page.getTotal(), page.getResult());
    }
}
