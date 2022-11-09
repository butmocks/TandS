
import React from 'react';
import { Link } from 'react-router-dom';





const Admin = () => {




  
  return (

    <table>

    

              <header className="header">
                  <h1>
                      <a id="reset" href="./" className="header-logo">
                          <img src="/img/favicon-64x64.png" />
                      </a>
                      <span>SQLite Playground</span> &nbsp;//
                      <db-name id="db-name" className="db-name"></db-name>
                  </h1>
                  <div className="toolbar hidden-mobile">
                      <label title="⌃O or ⌘O" className="button button--small">
                          open file 
                          <input type="file" id="open-file" />
                          </label>
                      <button id="open-url" title="⌃U or ⌘U" className="button button--small">open url</button>

                  </div>
              </header>

              <link rel="stylesheet" href="css/editor.css" />
                  <link rel="stylesheet" href="css/commandbar.css" />
                      <section className="editor-section">
                          <sql-editor id="editor" className="sql-editor"></sql-editor>
                          <div id="commandbar" className="commandbar disabled">
                              <button id="execute" data-action="execute" title="⌃↵ or ⌘↵">run ►</button>
                              <button id="save" data-action="save" title="⌃S or ⌘S">☆ share</button>
                              <button id="show-tables" data-action="show-tables" title="⌃/ or ⌘/">○ tables</button>
                          </div>
                      </section>

                      <link rel="stylesheet" href="css/result.css" />
                          <link rel="stylesheet" href="css/status.css" />
                              <section className="result-section">
                                  <sql-status id="status" className="sql-status"></sql-status>
                                  <sql-result id="result" className="sql-result"></sql-result>
                              </section>
                          

                          <script src="../node_modules/sql.js/dist/sql-wasm.js" />
                          <script type="module" src="js/components/copy-link.js" />
                          <script type="module" src="js/components/db-name.js" />
                          <script type="module" src="./js/components/sql-editor.js" />
                          <script type="module" src="./js/components/sql-result.js" />
                          <script type="module" src="./js/components/sql-status.js" />
                          </table>
  )
}
                          export default Admin;






                     