// 此处为 AI 初始生成，定义全局类型接口

// 页面路由枚举
export enum PageView {
  HOME = 'home',
  INTRO = 'intro',
  CULTURE = 'culture',
  MEDIA = 'media',   // 新增：影音资料
  ABOUT = 'about',   // 新增：关于我们
  LOGIN = 'login',
  REGISTER = 'register'
}

// 导航菜单项接口
export interface NavItem {
  label: string;
  view: PageView;
}

// 古籍神兽数据接口
export interface BeastCard {
  id: number;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
}

// 注册表单数据接口
export interface RegisterFormData {
  username: string;
  password: string;
  confirmPassword: string;
  gender: 'male' | 'female' | 'other';
  interests: string[];
  occupation: string;
  agreement: boolean;
}