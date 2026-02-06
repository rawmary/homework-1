import MainLayout from "../shared/layouts/MainLayout"
import PostList from "../widgets/PostList/PostList"
import { useTheme } from "../shared/lib/theme/useTheme"

let App = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
    <MainLayout>
      <PostList />
    </MainLayout>
    </div>
  )
}

export default App
