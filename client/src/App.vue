<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style>
  .el-form-item__label{
    font-size: 30px !important;
  }  
  .el-form-item__content{
    height:50px !important;
    line-height: 30px;
  }
  .el-menu-item-group a{
    color:#000;
    
  }
  .el-input{
      height:100%;
    }
    .is-success{
      height:80px;;
      line-height: 80px;
    }
    .el-button--primary{
       width:60%;
    }
    .el-form-item{
      padding-top:30px !important;
    }
    .el-input{
      display:block !important;
      height:50px !important;
      margin-right:5px !important;
    }
    .el-input input{
      width:90%;
      height:100%;
    }
     .markdown-body{
          width:100%;
          height:200px;;
          background: red;
          position:absolute;
          top:0;

      }
      .el-input__suffix{
        margin-right:20px;
      }
      .el-input{
        width:100%;
      }
</style>
