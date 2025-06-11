localStorage.clear()

const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 2,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page UI",
        taskDate: "2025-06-10",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve overlapping issue on mobile",
        taskDate: "2025-06-11",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Add tests for dashboard components",
        taskDate: "2025-06-12",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Readme",
        taskDescription: "Include setup steps for contributors",
        taskDate: "2025-06-13",
        category: "Documentation"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Add Loading Spinner",
        taskDescription: "Show spinner during API calls",
        taskDate: "2025-06-14",
        category: "UI Enhancement"
      }
    ]
  },
  {
    id: 2,
    firstName: "Ishita",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Build Registration Form",
        taskDescription: "Include validation and accessibility",
        taskDate: "2025-06-10",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize Images",
        taskDescription: "Compress images to improve speed",
        taskDate: "2025-06-11",
        category: "Performance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Dark Mode Toggle",
        taskDescription: "Add switch for dark/light themes",
        taskDate: "2025-06-12",
        category: "Frontend"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Set Up CI/CD",
        taskDescription: "Configure GitHub Actions pipeline",
        taskDate: "2025-06-13",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create User Analytics",
        taskDescription: "Add event tracking with Segment",
        taskDate: "2025-06-14",
        category: "Analytics"
      }
    ]
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Setup Firebase Auth",
        taskDescription: "Integrate Firebase authentication",
        taskDate: "2025-06-08",
        category: "Authentication"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Landing Page",
        taskDescription: "Design a marketing-friendly landing page",
        taskDate: "2025-06-09",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Admin Role Logic",
        taskDescription: "Restrict routes based on role",
        taskDate: "2025-06-10",
        category: "Authorization"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Toast Notifications",
        taskDescription: "Inform users about actions",
        taskDate: "2025-06-11",
        category: "UX"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Upgrade React Version",
        taskDescription: "Move to latest stable version",
        taskDate: "2025-06-12",
        category: "Maintenance"
      }
    ]
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Form Validation",
        taskDescription: "Improve UX with validation messages",
        taskDate: "2025-06-07",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create API Docs",
        taskDescription: "Swagger or Postman collection",
        taskDate: "2025-06-08",
        category: "Documentation"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Add Skeleton Loaders",
        taskDescription: "Show placeholders while loading",
        taskDate: "2025-06-09",
        category: "UI Enhancement"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Refactor Sidebar",
        taskDescription: "Modularize for reuse",
        taskDate: "2025-06-10",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Accessibility Audit",
        taskDescription: "Use Lighthouse for checking",
        taskDate: "2025-06-11",
        category: "Compliance"
      }
    ]
  },
  {
    id: 5,
    firstName: "Devansh",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Setup MongoDB Atlas",
        taskDescription: "Cloud DB setup and connection",
        taskDate: "2025-06-06",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Footer",
        taskDescription: "Add links and copyright",
        taskDate: "2025-06-07",
        category: "UI"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Mobile Responsiveness",
        taskDescription: "Fix layout issues on small screens",
        taskDate: "2025-06-08",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Build Notifications Panel",
        taskDescription: "Real-time updates with WebSocket",
        taskDate: "2025-06-09",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "SEO Optimization",
        taskDescription: "Improve meta tags and indexing",
        taskDate: "2025-06-10",
        category: "Marketing"
      }
    ]
  }
];

// Admin section
const admin = [
  {
    id: 1,
    firstName: "Rohit",
    email: "admin@me.com",
    password: "123"
  }
];

// LocalStorage functions
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
