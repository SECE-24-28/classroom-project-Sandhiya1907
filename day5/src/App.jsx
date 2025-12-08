import validate from "./validate";
export default function App() {
  return (
    <>
      <form action="">
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label htmlFor="username">Username:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  placeholder="Enter username"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password">Password:</label>
              </td>
              <td>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="Enter Password"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="remember" id="remember" value="remember"/>
                <label htmlFor="remember">Remember Me..?</label>
              </td>
              <td>
                <input type="button" value="submit" onClick={validate}/>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}
