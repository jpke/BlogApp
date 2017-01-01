import {Navigation} from 'react-native-navigation';

// import LandingScreen from './LandingScreen';
import PostsScreen from '../containers/PostsScreen';
import BlogPostScreen from './containers/BlogPostScreen';
// import SideMenu from './SideMenu';

// register all screens of the app (including internal ones)
export function registerScreens() {
  // Navigation.registerComponent('BlogApp.LandingScreen', () => LandingScreen);
  Navigation.registerComponent('BlogApp.PostsScreen', () => PostsScreen);
  Navigation.registerComponent('BlogApp.BlogPostScreen', () => BlogPostScreen);
  // Navigation.registerComponent('BlogApp.SideMenu', () => SideMenu);
}
