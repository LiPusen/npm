import { app, BrowserWindow, Menu, MenuItem, ipcMain } from 'electron'

const menu = new Menu();

// 刷新
menu.append(new MenuItem({
    label: '刷新',
    role: 'Reload',
    click: (item, focusedWindow) => {
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
}))
// 全屏切换
menu.append(new MenuItem({
    label: '切换全屏',
    click: (item, focusedWindow) => {
        if (focusedWindow) {
            focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
        }
    } 
}))
// 最小化应用
menu.append(new MenuItem({
    label: '最小化',
    role: 'minimize'
}))

  
app.on('will-quit', function () {
  globalShortcut.unregisterAll()
})

app.on('browser-window-created', function (event, win) {
  win.webContents.on('context-menu', function (e, params) {
    menu.popup(win, params.x, params.y)
  })
})

ipcMain.on('show-context-menu', function (event) {
  const win = BrowserWindow.fromWebContents(event.sender)
  menu.popup(win)
})