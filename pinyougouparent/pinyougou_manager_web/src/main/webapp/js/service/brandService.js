//定义服务
app.service("brandService", function ($http) {
    //查询所有品牌
    this.findAll = function () {
        return $http.get('../brand/findAll.do')
    }

    //分页查询品牌
    this.findPage = function (page, rows) {
        return $http.get('../brand/findPage.do?page=' + page + '&size=' + rows);
    }

    //查询单个品牌
    this.findOne = function (id) {
        return $http.get('../brand/findOne.do?id=' + id);
    }

    //批量删除
    this.del = function (selectedIds) {
        return $http.get('../brand/delete.do?ids=' + selectedIds);
    }

    //添加品牌
    this.add = function (entity) {
        return $http.post('../brand/add.do', entity);
    }

    //修改品牌
    this.update = function (entity) {
        return $http.post('../brand/update.do', entity);
    }

    //负责条件查询
    this.search = function (page, rows , searchEntity) {
        return $http.post('../brand/search.do?page=' + page + '&size=' + rows, searchEntity);
    }

})