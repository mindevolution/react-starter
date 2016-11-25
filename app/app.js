/*
 * 使用React开发的学生考试功能
 * - 测试学生的考试环境，喇叭和麦克风是否工作正常
 */
import { render } from 'react-dom'
import AppRoute from './routes/Route'

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render(AppRoute, document.getElementById('app'))
