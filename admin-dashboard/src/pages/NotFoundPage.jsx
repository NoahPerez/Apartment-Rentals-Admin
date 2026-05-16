import { Link } from "react-router-dom"

function NotFoundPage() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>This page does not exist.</p>
      <Link to="/">Back to Dashboard</Link>
    </div>
  )
}

export default NotFoundPage
