import {combineReducers} from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer';
import GameBauCuaReducer from './GameBauCuaReducer';
import GameTaiXiuReducer from './GameTaiXiuReducer';
import QuanLySinhVienReducer from './QuanLySinhVienReducer';
// stroe tổng của ứng dụng chứa tất cả các state của ứng dụng
const rootReducer = combineReducers({
  // nơi khai báo các state theo từng nghiệp vụ
  //stateBaiTapGioHang: BaiTapGioHangReducer,
  //stateGameBauCuaReducer: GameBauCuaReducer,
  //stateGameTaiXiuReducer: GameTaiXiuReducer,
  stateQuanLySinhVienReducer: QuanLySinhVienReducer
});

export default rootReducer;
