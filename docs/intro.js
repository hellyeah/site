view Docs.Intro {
  <Title big>What is Flint?</Title>
  <Body>
    <Text big>
      It's a simple macro on top of ES6 that brings
      an concise language to write web sites & apps faster, and more easily.
    </Text>

    <Text>
      It's a step back to the basics. There's one abstraction: a <code>view</code>.

      Views are just JavaScript. They replace HTML, CSS and your framework of choice with a simple syntax.
      Views have variables, JSX and style. When a variable changes, your view updates automatically.
      <br />
    </Text>

    <Title>Super Hot Reloads</Title>
    <Text>
      Hot reloads are when you edit your app and it never "resets" its state. Typically hot reloads retain state of your component tree, but lose it in certain situations. <b>Super hot reloads</b> take it a step further, with two features:
    </Text>

    <ul>
      <li>
        <b>Nested state</b> - Flint tracks all of your variables and view properties. Parent views won't lose their child view state (unless you change one of the child properties). So you can edit a Modal, without losing the Toggle positions inside of it.
      </li>
      <li>
        <b>Internal state</b> - When editing a view, Flint also tracks how your values change over time. It will keep state that you haven't changed, avoiding having the entire state of a view reset when you're only changing some wording.
      </li>
    </ul>

    <Text>
      Flint's compiler is not only smarter than others, it's faster too due to avoiding a large amount of AST parsing.
    </Text>

    <Title>Powerful Styles</Title>
    <Text>
      Flint's <code>$</code> style variables are automatically attached to your view elements, to bring back the ease of styling found in CSS. But they go much further. Styles are just objects, and you have the full power of ES6.
    </Text>

    <Text>
      Flint also optimizes styles in a big way. It statically analyzes your style objects and extracts the non-dynamic keys. It then hoists those styles out of your view and into classes, giving you the full power of CSS in JS, without any performance downside, all without having to think about it.
    </Text>

    <Title>Smart Errors</Title>
    <Text>
      Runtime and compile time errors are instantly visible in your browser and your editor. Flint recovers from errors gracefully so your app doesn't break. It notifies you when you tried to access a view that doesn't exist and recovers previous good states when you've made an error, to avoid large amounts of distractions in your browser.
    </Text>

    <Title>Automatic NPM Installs</Title>
    <Text>
      Flint understands your code as though modern ES6 were supported in every browser. This means when you type an import, Flint knows to install the package, and refresh your browser. This happens automatically for you without ever needing to refresh the browser.
    </Text>

    <Title>No boilerplate</Title>
    <Text>
      Create and start your app instantly, the only files in your directory is your own code. And the only code you write is directly representing what your app is doing, no writing around a library.
    </Text>

    <Text>
      Flint watches your files, builds to production, and will continuiously improve over time without you needing to ever learn a build system configuration syntax or write massive amounts of glue code to bring your app to life.
    </Text>

    <Title>Principles</Title>

    <Text>
      Throughout the process of building there are countless moments where ease of
      experimentation unlocks entirely new paths. You stumble on solutions only
      because you have fast and lightweight tools. By bringing you close to your canvas Flint enables new ways to create.
    </Text>

    <Next to='/docs/install'>Install Flint</Next>
  </Body>
}