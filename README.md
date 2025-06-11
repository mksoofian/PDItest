Initial GPT practice challenge:
Sure! Here's a quick **combined React + algorithm** challenge:

---

### 🧠 Challenge: **Searchable User List**

#### Goal:

Build a React component that:

1. Fetches a list of users from `https://jsonplaceholder.typicode.com/users`
2. Displays their names in a list
3. Has a search input to filter users by name (case-insensitive)

---

### 🔧 Requirements:

- Use `useEffect` to fetch data
- Use `useState` to manage users and the search query
- Display a loading state while fetching
- Filter the list based on what the user types

---

### 💡 Bonus (if you have time):

- Debounce the input (500ms)
- Sort users alphabetically

---

Absolutely. Here’s a **level-up challenge** that builds naturally on your current app — focusing on more advanced React concepts and better UI/UX.

---

## 🧱 **Level-Up Challenge: User Details Panel + Favorites**

### 📌 Requirements:

1. **Clickable user list**

   - When you click on a user’s name, show their full details (address, email, phone, etc.) in a panel or modal.

2. **Add to Favorites**

   - Allow the user to “⭐ favorite” any user.
   - Show a separate section listing only favorited users.
   - Keep favorites persistent using `localStorage`.

3. **Improved Search**

   - Make search match **name, username, or email**.
   - Search should be case-insensitive and instant (with debounce, \~500ms).

4. **Responsive Layout (bonus)**

   - Use CSS or a utility framework (Tailwind, etc.) to make the layout mobile-friendly.

---

### 🧠 Tech Concepts You’ll Practice:

- Conditional rendering + toggling UI panels
- State lifting + controlled components
- `localStorage` integration
- `useMemo` (for filtering optimization)
- Possibly creating custom hooks (`useDebounce`, `useFavorites`)

---

### 💡 Bonus Stretch:

- Add pagination (e.g., display 5 users per page)
- Integrate a status indicator (online/offline toggle per user with mock state)

---
