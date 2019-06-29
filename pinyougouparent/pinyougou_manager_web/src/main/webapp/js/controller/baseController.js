app.controller('baseController', function ($scope) {

//刷新列表方法
    $scope.reloadList = function () {
        $scope.search($scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
    };

//    分页控件配置
    $scope.paginationConf = {
        currentPage: 1,
        totalItems: 10,
        itemsPerPage: 10,
        perPageOptions: [5, 10, 15, 20, 25],
        onChange: function () {
            $scope.reloadList();
        }
    };

//定义一个数组，用来装载被选择的id值
    $scope.selectedIds = [];
    $scope.updateSelection = function ($event, id) {
        if ($event.target.checked) {
            $scope.selectedIds.push(id);
        } else {
            //indexOf方法是获取没有数组中已经有的，选择框的状态变为取消后的框所在的索引值
            var index = $scope.selectedIds.indexOf(id);
            //splice方法中的参数：第一个是要删除的位置，第二个是要删除的个数
            $scope.selectedIds.splice(index, 1);
        }
    };
})
