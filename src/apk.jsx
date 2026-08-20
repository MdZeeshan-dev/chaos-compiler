import {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  useContext,
  createContext
} from "react";


// ============================================================
// 1. BASIC COMPONENT
// ============================================================

function Header() {
  return <h1>React Practice</h1>;
}


// ============================================================
// 2. PROPS
// ============================================================

function UserCard({ name, age, role }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
}


// ============================================================
// 3. STATE - useState
// ============================================================

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        +
      </button>

      <button onClick={() => setCount(count - 1)}>
        -
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}


// ============================================================
// 4. FUNCTIONAL STATE UPDATE
// ============================================================

function BetterCounter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={increase}>
        Increase
      </button>
    </div>
  );
}


// ============================================================
// 5. CONDITIONAL RENDERING
// ============================================================

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome User</h2>
      ) : (
        <h2>Please Login</h2>
      )}

      <button
        onClick={() =>
          setIsLoggedIn(prev => !prev)
        }
      >
        Toggle
      </button>
    </div>
  );
}


// ============================================================
// 6. LIST RENDERING
// ============================================================

function UserList() {
  const users = [
    { id: 1, name: "Zeeshan" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Rahul" }
  ];

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}


// ============================================================
// 7. OBJECT STATE
// ============================================================

function Profile() {
  const [user, setUser] = useState({
    name: "Zeeshan",
    age: 21
  });

  const updateAge = () => {
    setUser(prev => ({
      ...prev,
      age: prev.age + 1
    }));
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.age}</p>

      <button onClick={updateAge}>
        Increase Age
      </button>
    </div>
  );
}


// ============================================================
// 8. ARRAY STATE
// ============================================================

function Skills() {
  const [skills, setSkills] = useState([
    "JavaScript",
    "React"
  ]);

  const addSkill = () => {
    setSkills(prev => [
      ...prev,
      "Node.js"
    ]);
  };

  return (
    <div>
      {skills.map(skill => (
        <p key={skill}>{skill}</p>
      ))}

      <button onClick={addSkill}>
        Add Skill
      </button>
    </div>
  );
}


// ============================================================
// 9. FORM
// ============================================================

function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <input
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
      />

      <button type="submit">
        Login
      </button>
    </form>
  );
}


// ============================================================
// 10. FORM VALIDATION
// ============================================================

function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Invalid email";
    }

    if (form.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newErrors = validate();

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted", form);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />

      <p>{errors.name}</p>

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <p>{errors.email}</p>

      <input
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
      />

      <p>{errors.password}</p>

      <button type="submit">
        Register
      </button>
    </form>
  );
}


// ============================================================
// 11. useEffect
// ============================================================

function EffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Count changed");
  }, [count]);

  return (
    <button
      onClick={() =>
        setCount(prev => prev + 1)
      }
    >
      {count}
    </button>
  );
}


// ============================================================
// 12. FETCH API
// ============================================================

function UsersApi() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();

        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>
          {user.name}
        </p>
      ))}
    </div>
  );
}


// ============================================================
// 13. SEARCH
// ============================================================

function SearchUsers() {
  const users = [
    "Zeeshan",
    "Ali",
    "Rahul",
    "Aman",
    "Rohit"
  ];

  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(user =>
    user
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        value={search}
        onChange={e =>
          setSearch(e.target.value)
        }
        placeholder="Search user"
      />

      {filteredUsers.map(user => (
        <p key={user}>{user}</p>
      ))}
    </div>
  );
}


// ============================================================
// 14. FILTER
// ============================================================

function ProductFilter() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      category: "electronics"
    },
    {
      id: 2,
      name: "Phone",
      category: "electronics"
    },
    {
      id: 3,
      name: "Shoes",
      category: "fashion"
    }
  ];

  const [category, setCategory] =
    useState("all");

  const filteredProducts =
    category === "all"
      ? products
      : products.filter(
          product =>
            product.category === category
        );

  return (
    <div>
      <select
        value={category}
        onChange={e =>
          setCategory(e.target.value)
        }
      >
        <option value="all">All</option>
        <option value="electronics">
          Electronics
        </option>
        <option value="fashion">
          Fashion
        </option>
      </select>

      {filteredProducts.map(product => (
        <p key={product.id}>
          {product.name}
        </p>
      ))}
    </div>
  );
}


// ============================================================
// 15. useRef
// ============================================================

function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} />

      <button onClick={focusInput}>
        Focus
      </button>
    </div>
  );
}


// ============================================================
// 16. useMemo
// ============================================================

function ExpensiveCalculation() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  const result = useMemo(() => {
    console.log("Calculating...");

    let total = 0;

    for (let i = 0; i < 100000000; i++) {
      total += number;
    }

    return total;
  }, [number]);

  return (
    <div>
      <p>{result}</p>

      <button
        onClick={() =>
          setCount(prev => prev + 1)
        }
      >
        Count {count}
      </button>

      <button
        onClick={() =>
          setNumber(prev => prev + 1)
        }
      >
        Change Number
      </button>
    </div>
  );
}


// ============================================================
// 17. useCallback
// ============================================================

function Child({ onClick }) {
  return (
    <button onClick={onClick}>
      Child Button
    </button>
  );
}

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <div>
      <p>{count}</p>

      <button
        onClick={() =>
          setCount(prev => prev + 1)
        }
      >
        Increase
      </button>

      <Child onClick={handleClick} />
    </div>
  );
}


// ============================================================
// 18. CONTEXT API
// ============================================================

const ThemeContext =
  createContext();

function ThemeChild() {
  const theme =
    useContext(ThemeContext);

  return (
    <h2>
      Current theme: {theme}
    </h2>
  );
}

function ThemeExample() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeChild />
    </ThemeContext.Provider>
  );
}


// ============================================================
// 19. CUSTOM HOOK
// ============================================================

function useToggle(initialValue = false) {
  const [value, setValue] =
    useState(initialValue);

  const toggle = () => {
    setValue(prev => !prev);
  };

  return [value, toggle];
}

function ToggleExample() {
  const [isOpen, toggle] =
    useToggle(false);

  return (
    <div>
      <button onClick={toggle}>
        Toggle
      </button>

      {isOpen && (
        <p>Content is visible</p>
      )}
    </div>
  );
}


// ============================================================
// 20. LOCAL STORAGE
// ============================================================

function LocalStorageExample() {
  const [name, setName] =
    useState(() => {
      return (
        localStorage.getItem("name") ||
        ""
      );
    });

  useEffect(() => {
    localStorage.setItem(
      "name",
      name
    );
  }, [name]);

  return (
    <input
      value={name}
      onChange={e =>
        setName(e.target.value)
      }
      placeholder="Name"
    />
  );
}


// ============================================================
// 21. TODO APP
// ============================================================

function TodoApp() {
  const [todos, setTodos] =
    useState([]);

  const [input, setInput] =
    useState("");

  const addTodo = () => {
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    };

    setTodos(prev => [
      ...prev,
      newTodo
    ]);

    setInput("");
  };

  const toggleTodo = id => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? {
              ...todo,
              completed:
                !todo.completed
            }
          : todo
      )
    );
  };

  const deleteTodo = id => {
    setTodos(prev =>
      prev.filter(
        todo => todo.id !== id
      )
    );
  };

  return (
    <div>
      <input
        value={input}
        onChange={e =>
          setInput(e.target.value)
        }
        placeholder="Enter todo"
      />

      <button onClick={addTodo}>
        Add
      </button>

      {todos.map(todo => (
        <div key={todo.id}>
          <span
            onClick={() =>
              toggleTodo(todo.id)
            }
            style={{
              textDecoration:
                todo.completed
                  ? "line-through"
                  : "none"
            }}
          >
            {todo.text}
          </span>

          <button
            onClick={() =>
              deleteTodo(todo.id)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}


// ============================================================
// 22. CRUD
// ============================================================

function CrudApp() {
  const [users, setUsers] =
    useState([]);

  const [name, setName] =
    useState("");

  const [editingId, setEditingId] =
    useState(null);

  const addOrUpdateUser = () => {
    if (!name.trim()) return;

    if (editingId !== null) {
      setUsers(prev =>
        prev.map(user =>
          user.id === editingId
            ? {
                ...user,
                name
              }
            : user
        )
      );

      setEditingId(null);
    } else {
      setUsers(prev => [
        ...prev,
        {
          id: Date.now(),
          name
        }
      ]);
    }

    setName("");
  };

  const editUser = user => {
    setName(user.name);
    setEditingId(user.id);
  };

  const deleteUser = id => {
    setUsers(prev =>
      prev.filter(
        user => user.id !== id
      )
    );
  };

  return (
    <div>
      <input
        value={name}
        onChange={e =>
          setName(e.target.value)
        }
        placeholder="User name"
      />

      <button onClick={addOrUpdateUser}>
        {editingId !== null
          ? "Update"
          : "Add"}
      </button>

      {users.map(user => (
        <div key={user.id}>
          <span>{user.name}</span>

          <button
            onClick={() =>
              editUser(user)
            }
          >
            Edit
          </button>

          <button
            onClick={() =>
              deleteUser(user.id)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}


// ============================================================
// 23. MODAL
// ============================================================

function Modal() {
  const [open, setOpen] =
    useState(false);

  return (
    <div>
      <button
        onClick={() =>
          setOpen(true)
        }
      >
        Open Modal
      </button>

      {open && (
        <div>
          <h2>Modal</h2>

          <p>
            This is modal content.
          </p>

          <button
            onClick={() =>
              setOpen(false)
            }
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}


// ============================================================
// 24. TABS
// ============================================================

function Tabs() {
  const [activeTab, setActiveTab] =
    useState("home");

  const tabs = {
    home: "Home Content",
    profile: "Profile Content",
    settings: "Settings Content"
  };

  return (
    <div>
      {Object.keys(tabs).map(tab => (
        <button
          key={tab}
          onClick={() =>
            setActiveTab(tab)
          }
        >
          {tab}
        </button>
      ))}

      <h2>
        {tabs[activeTab]}
      </h2>
    </div>
  );
}


// ============================================================
// 25. ACCORDION
// ============================================================

function Accordion() {
  const [open, setOpen] =
    useState(null);

  const items = [
    {
      id: 1,
      title: "What is React?",
      content:
        "React is a JavaScript library."
    },
    {
      id: 2,
      title: "What is state?",
      content:
        "State stores component data."
    }
  ];

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <button
            onClick={() =>
              setOpen(
                open === item.id
                  ? null
                  : item.id
              )
            }
          >
            {item.title}
          </button>

          {open === item.id && (
            <p>{item.content}</p>
          )}
        </div>
      ))}
    </div>
  );
}


// ============================================================
// 26. PAGINATION
// ============================================================

function Pagination() {
  const data = Array.from(
    { length: 50 },
    (_, index) => index + 1
  );

  const [page, setPage] =
    useState(1);

  const limit = 5;

  const totalPages =
    Math.ceil(
      data.length / limit
    );

  const currentData =
    data.slice(
      (page - 1) * limit,
      page * limit
    );

  return (
    <div>
      {currentData.map(item => (
        <p key={item}>
          Item {item}
        </p>
      ))}

      <button
        disabled={page === 1}
        onClick={() =>
          setPage(prev => prev - 1)
        }
      >
        Previous
      </button>

      <span>
        {" "}
        {page} / {totalPages}{" "}
      </span>

      <button
        disabled={
          page === totalPages
        }
        onClick={() =>
          setPage(prev => prev + 1)
        }
      >
        Next
      </button>
    </div>
  );
}


// ============================================================
// 27. DEBOUNCE
// ============================================================

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] =
    useState(value);

  useEffect(() => {
    const timer =
      setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}


function DebouncedSearch() {
  const [search, setSearch] =
    useState("");

  const debouncedSearch =
    useDebounce(search, 500);

  useEffect(() => {
    if (!debouncedSearch) return;

    console.log(
      "API call:",
      debouncedSearch
    );
  }, [debouncedSearch]);

  return (
    <input
      value={search}
      onChange={e =>
        setSearch(e.target.value)
      }
      placeholder="Search..."
    />
  );
}


// ============================================================
// 28. SHOPPING CART
// ============================================================

function ShoppingCart() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000
    },
    {
      id: 2,
      name: "Phone",
      price: 30000
    }
  ];

  const [cart, setCart] =
    useState([]);

  const addToCart = product => {
    setCart(prev => {
      const existing =
        prev.find(
          item =>
            item.id === product.id
        );

      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1
        }
      ];
    });
  };

  const removeFromCart = id => {
    setCart(prev =>
      prev.filter(
        item => item.id !== id
      )
    );
  };

  const total = useMemo(() => {
    return cart.reduce(
      (sum, item) =>
        sum +
        item.price *
          item.quantity,
      0
    );
  }, [cart]);

  return (
    <div>
      <h2>Products</h2>

      {products.map(product => (
        <div key={product.id}>
          <span>
            {product.name} -
            ₹{product.price}
          </span>

          <button
            onClick={() =>
              addToCart(product)
            }
          >
            Add
          </button>
        </div>
      ))}

      <h2>Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          <span>
            {item.name} x{" "}
            {item.quantity}
          </span>

          <button
            onClick={() =>
              removeFromCart(item.id)
            }
          >
            Remove
          </button>
        </div>
      ))}

      <h2>
        Total: ₹{total}
      </h2>
    </div>
  );
}


// ============================================================
// 29. LOADING / ERROR / EMPTY STATE
// ============================================================

function DataStateExample() {
  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [data, setData] =
    useState([]);

  const fetchData = async () => {

    try {

      setLoading(true);
      setError("");

      const response =
        await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

      if (!response.ok) {
        throw new Error(
          "Something went wrong"
        );
      }

      const result =
        await response.json();

      setData(result);

    } catch (error) {

      setError(error.message);

    } finally {

      setLoading(false);

    }
  };

  return (
    <div>
      <button onClick={fetchData}>
        Load Data
      </button>

      {loading && (
        <p>Loading...</p>
      )}

      {error && (
        <p>{error}</p>
      )}

      {!loading &&
        !error &&
        data.length === 0 && (
          <p>No data found</p>
        )}

      {data
        .slice(0, 5)
        .map(item => (
          <p key={item.id}>
            {item.title}
          </p>
        ))}
    </div>
  );
}


// ============================================================
// 30. MAIN APP
// ============================================================

function App() {
  return (
    <div>

      <Header />

      <UserCard
        name="Zeeshan"
        age={21}
        role="Developer"
      />

      <Counter />

      <BetterCounter />

      <LoginStatus />

      <UserList />

      <Profile />

      <Skills />

      <LoginForm />

      <RegisterForm />

      <EffectExample />

      <UsersApi />

      <SearchUsers />

      <ProductFilter />

      <InputFocus />

      <ThemeExample />

      <ToggleExample />

      <LocalStorageExample />

      <TodoApp />

      <CrudApp />

      <Modal />

      <Tabs />

      <Accordion />

      <Pagination />

      <DebouncedSearch />

      <ShoppingCart />

      <DataStateExample />

    </div>
  );
}

export default App;