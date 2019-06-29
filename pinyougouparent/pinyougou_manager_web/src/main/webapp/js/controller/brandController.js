//定义控制器
app.controller("brandController", function ($scope, $controller, brandService) {

    //引入抽取后的baseController
    $controller('baseController', {$scope: $scope});

    //查询所有方法
    $scope.findAll = function () {
        brandService.findAll().success(
            function (data) {
                $scope.list = data;
            }
        )
    };


    //分页查询方法
    $scope.findPage = function (page, rows) {
        brandService.findPage(page, rows).success(function (data) {
            $scope.list = data.rows;
            $scope.paginationConf.totalItems = data.total;//更新总记录数
        })
    };

    //保存方法
    $scope.save = function () {

        //先判断id属性是否有值，如果有，则是修改，否则是增加
        var object = null;
        if ($scope.entity.id) {
            //修改品牌
            object = brandService.update($scope.entity);
        } else {
            //添加品牌
            object = brandService.add($scope.entity);
        }

        object.success(function (response) {
            if (response.success) {
                $scope.reloadList();
            } else {
                alert(response.message);
            }
        });
    };

    //回显所选择的数据
    $scope.findOne = function (id) {
        brandService.findOne(id).success(function (response) {
            $scope.entity = response;
        })
    };

    //批量删除
    $scope.del = function () {
        brandService.del($scope.selectedIds).success(function (response) {
            if (response.success) {
                $scope.reloadList();
            }
        })
    };

    //复杂条件查询
    $scope.searchEntity = {};
    $scope.search = function (page, rows) {
        brandService.search(page, rows, $scope.searchEntity).success(function (data) {
            $scope.list = data.rows;
            $scope.paginationConf.totalItems = data.total;//更新总记录数
        })
    }
});