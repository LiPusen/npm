// 懒加载适配器
let _import;
if(process.env.NODE_ENV == 'development') {
    _import = file => require('@/views/' + file + '.vue').default
} else {
    _import = file => () => import('@/views/' + file + '.vue')
}
// 基础路由映射
export const commonRoute = [
    {
        path: '/',
        component: _import('layout/Layout'),
        redirect: 'home',
        children: [{
            path: '/home',
            component: _import('dashboard/index'),
            name: 'home',
            meta: { icon: 'dashboard', noCache: true }
        }, {
        	path: '/icon',
          	component: _import('svg-icons/index'),
          	name: 'icons',
          	meta: { icon: 'icon', noCache: true, code: 10010 }
        }, {
        	path: '/clipboard',
    		component: _import('clipboard/index'),
    		name: 'clipboardDemo',
        	meta: { icon: 'clipboard', noCache: true, code: 10020}
        }, {
        	path: '/401', 
        	component: _import('errorPage/401'), 
        	name: 'page401', 
        	meta: { noCache: true, code: 10031, tree: 'errorPages'}
        }, {
        	path: '/404', 
        	component: _import('errorPage/404'), 
        	name: 'page404', 
        	meta: { noCache: true, code: 10032, tree: 'errorPages'}
        }, {
        	path: '/keyboard', 
        	component: _import('charts/keyboard'), 
        	name: 'keyboardChart', 
        	meta: { noCache: true, code: 10041, tree: 'charts' }
        }, {
        	path: '/line', 
        	component: _import('charts/line'), 
        	name: 'lineChart', 
        	meta: { noCache: true, code: 10042, tree: 'charts' }
        }, {
        	path: '/mixchart', 
        	component: _import('charts/mixChart'), 
        	name: 'mixChart', 
        	meta: { noCache: true, code: 10043, tree: 'charts' }
        }, {
        	path: '/dynamic-table', 
        	component: _import('example/table/dynamicTable/index'), 
        	name: 'dynamicTable', 
        	meta: { code: 10051, tree: 'example' }
        }, {
        	path: '/drag-table', 
        	component: _import('example/table/dragTable'),
        	name: 'dragTable',
        	meta: { code: 10052, tree: 'example' }
        }, {
        	path: '/inline-edit-table', 
        	component: _import('example/table/inlineEditTable'), 
        	name: 'inlineEditTable', 
        	meta: { code: 10053, tree: 'example' }
        }, {
        	path: '/tree-table', 
        	component: _import('example/table/treeTable/treeTable'), 
        	name: 'treeTableDemo', 
        	meta: { code: 10054, tree: 'example' }
        }, {
        	path: '/custom-tree-table', 
        	component: _import('example/table/treeTable/customTreeTable'), 
        	name: 'customTreeTable', 
        	meta: { code: 10055, tree: 'example' }
        }, {
        	path: '/complex-table', 
        	component: _import('example/table/complexTable'), 
        	name: 'complexTable', 
        	meta: { code: 10056, tree: 'example' }
        }, {
        	path: '/tab', 
        	component: _import('example/tab/index'), 
        	name: 'tab', 
        	meta: { code: 10057, tree: 'example' }
        }, {
        	path: '/export-excel', 
        	component: _import('excel/exportExcel'), 
        	name: 'exportExcel', 
        	meta: { code: 10058, tree: 'example' }
        }, {
        	path: '/download', 
        	component: _import('zip/index'), 
        	name: 'zip', 
        	meta: { }
//      }, {
//      	path: '/i18n', 
//      	component: _import('i18n-demo/index'), 
//      	name: 'i18n', 
//      	meta: {  }
        }]
    },
    { path: '/login', component: _import('login/index')},
    { path: '/404', component: _import('errorPage/404')},
    { path: '/401', component: _import('errorPage/401')},
    { path: '*', redirect: '/404' }
]
// 具有权限的动态路由
export const asyncRoute = [
      {
        path: '/components',
        component: _import('layout/Layout'),
        redirect: 'noredirect',
        name: 'component-demo',
        meta: {
          title: 'components',
          icon: 'component'
        },
        children: [
          { path: 'tinymce', component: _import('components-demo/tinymce'), name: 'tinymce-demo', meta: { title: 'tinymce' }},
          { path: 'markdown', component: _import('components-demo/markdown'), name: 'markdown-demo', meta: { title: 'markdown' }},
          { path: 'json-editor', component: _import('components-demo/jsonEditor'), name: 'jsonEditor-demo', meta: { title: 'jsonEditor' }},
          { path: 'dnd-list', component: _import('components-demo/dndList'), name: 'dndList-demo', meta: { title: 'dndList' }},
          { path: 'splitpane', component: _import('components-demo/splitpane'), name: 'splitpane-demo', meta: { title: 'splitPane' }},
          { path: 'avatar-upload', component: _import('components-demo/avatarUpload'), name: 'avatarUpload-demo', meta: { title: 'avatarUpload' }},
          { path: 'dropzone', component: _import('components-demo/dropzone'), name: 'dropzone-demo', meta: { title: 'dropzone' }},
          { path: 'sticky', component: _import('components-demo/sticky'), name: 'sticky-demo', meta: { title: 'sticky' }},
          { path: 'count-to', component: _import('components-demo/countTo'), name: 'countTo-demo', meta: { title: 'countTo' }},
          { path: 'mixin', component: _import('components-demo/mixin'), name: 'componentMixin-demo', meta: { title: 'componentMixin' }},
          { path: 'back-to-top', component: _import('components-demo/backToTop'), name: 'backToTop-demo', meta: { title: 'backToTop' }},
          { path: 'drag-dialog', component: _import('components-demo/dragDialog'), name: 'dragDialog-demo', meta: { title: 'dragDialog' }}
        ]
      },
    
      {
        path: '/form',
        component: _import('layout/Layout'),
        redirect: 'noredirect',
        name: 'form',
        meta: {
          title: 'form',
          icon: 'form'
        },
        children: [
          { path: 'create-form', component: _import('form/create'), name: 'createForm', meta: { title: 'createForm', icon: 'table' }},
          { path: 'edit-form', component: _import('form/edit'), name: 'editForm', meta: { title: 'editForm', icon: 'table' }}
        ]
      },
    
      {
        path: '/excel',
        component: _import('layout/Layout'),
        redirect: '/excel/export-excel',
        name: 'excel',
        meta: {
          title: 'excel',
          icon: 'excel'
        },
        children: [
          { path: 'export-excel', component: _import('excel/exportExcel'), name: 'exportExcel', meta: { title: 'exportExcel' }},
          { path: 'export-selected-excel', component: _import('excel/selectExcel'), name: 'selectExcel', meta: { title: 'selectExcel' }},
          { path: 'upload-excel', component: _import('excel/uploadExcel'), name: 'uploadExcel', meta: { title: 'uploadExcel' }}
        ]
      },
    
      {
        path: '/theme',
        component: _import('layout/Layout'),
        redirect: 'noredirect',
        children: [{ path: 'index', component: _import('theme/index'), name: 'theme', meta: { title: 'theme', icon: 'theme' }}]
      }
]

export default commonRoute