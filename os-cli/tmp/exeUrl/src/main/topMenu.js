import { app, BrowserWindow, Menu, MenuItem } from 'electron'

let z = 100;
let template = [{
  label: '操作',
  submenu: [{
    label: '刷新',
    accelerator: 'F5',
    click: function (item, focusedWindow) {
      if (focusedWindow) {
        // 重载之后, 刷新并关闭所有的次要窗体
        if (focusedWindow.id === 1) {
          BrowserWindow.getAllWindows().forEach(function (win) {
            if (win.id > 1) {
              win.close()
            }
          })
        }
        focusedWindow.reload()
      }
    }
  }, {
    label: '切换全屏',
    accelerator: 'F11',
    click: function (item, focusedWindow) {
      if (focusedWindow) {
        focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
      }
    }
  }, {
    label: '页面缩小',
    accelerator: 'Ctrl+Down',
    click: function (item, focusedWindow) {
      if (focusedWindow) {
         z = z - 1;
         focusedWindow.webContents.setZoomFactor(z/100);
      }
    }
  }, {
    label: '页面放大',
    accelerator: 'Ctrl+Up',
    click: function (item, focusedWindow) {
      if (focusedWindow) {
        z = z + 1;
        focusedWindow.webContents.setZoomFactor(z/100);
      }
    }
  }, {
    type: 'separator'
  }, {
    label: '退出最大化',
    accelerator: 'Esc',
    click: function (item, focusedWindow) {
      if (focusedWindow) {
        focusedWindow.isMaximized() && focusedWindow.unmaximize();
      }
    }
  }, {
    label: '检查',
    accelerator: 'F12',
    click: function (item, focusedWindow) {
      if (focusedWindow) {
        focusedWindow.toggleDevTools()
      }
    }
  }]
}]

function findReopenMenuItem () {
  const menu = Menu.getApplicationMenu()
  if (!menu) return

  let reopenMenuItem
  menu.items.forEach(function (item) {
    if (item.submenu) {
      item.submenu.items.forEach(function (item) {
        if (item.key === 'reopenMenuItem') {
          reopenMenuItem = item
        }
      })
    }
  })
  return reopenMenuItem
}

app.on('ready', function () {
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
})

app.on('browser-window-created', function () {
  let reopenMenuItem = findReopenMenuItem()
  if (reopenMenuItem) reopenMenuItem.enabled = false
})

app.on('window-all-closed', function () {
  let reopenMenuItem = findReopenMenuItem()
  if (reopenMenuItem) reopenMenuItem.enabled = true
})
