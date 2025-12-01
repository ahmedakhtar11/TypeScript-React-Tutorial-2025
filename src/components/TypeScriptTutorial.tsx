import React from 'react';

// TypeScript Interface - defining the shape of our data
interface TutorialSection {
  id: number;
  title: string;
  description: string;
  codeExample: string;
}

// TypeScript Enum for difficulty levels
enum Difficulty {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced"
}

const TypeScriptTutorial: React.FC = () => {
  // TypeScript: Typed state with useState
  const [currentSection, setCurrentSection] = React.useState<number>(0);

  // TypeScript: Typed array of objects
  const tutorialSections: TutorialSection[] = [
    {
      id: 1,
      title: "Type Annotations",
      description: "TypeScript allows you to define types for variables, function parameters, and return values.",
      codeExample: `let name: string = "TypeScript";
let age: number = 25;
let isActive: boolean = true;`
    },
    {
      id: 2,
      title: "Interfaces",
      description: "Interfaces define the structure of objects, making your code more predictable and self-documenting.",
      codeExample: `interface User {
  id: number;
  name: string;
  email?: string; // Optional property
}`
    },
    {
      id: 3,
      title: "Generics",
      description: "Generics allow you to create reusable components that work with multiple types.",
      codeExample: `function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>("Hello");`
    },
    {
      id: 4,
      title: "Union Types",
      description: "Union types allow a value to be one of several types.",
      codeExample: `type Status = "loading" | "success" | "error";
let currentStatus: Status = "loading";

function printId(id: number | string) {
  console.log("ID:", id);
}`
    },
    {
      id: 5,
      title: "React with TypeScript - Function Components",
      description: "Using TypeScript with React enhances type safety and developer experience in your components.",
      codeExample: `import React from "react";
      import { useState, useEffect } from "react";
      
      type User = {
        name: string;
        email: string;
        isLoggedIn: boolean;
        age: number;
        hobbies: {
          id: number;
          title: string;
        };
        meta: Record<string, unknown>
      };
      
      type UserProps = {
        area: string;
      };
      
      const initialForm = {
        name: "Johnny",
        email: "john@test.com",
        age: 23,
        isLoggedIn: true,
        hobbies: {
          id: 2,
          title: "fishing",
        },
        meta: {
        favoriteFood: 'pizza'
        }
      };
      
      const UserComponent: React.FC<UserProps> = ({ area = "chicago" }) => {
        const [user, setUser] = useState<User>(initialForm);
      
        useEffect(() => {
          const fetchedUser = {
            name: "kano",
            email: "kano@yahoo.com",
            age: 12,
            isLoggedIn: false,
            hobbies: {
              id: 4,
              title: "logging",
            },
            meta: {
            favoriteFood: 'Pasta'
          }
      }
          setUser(fetchedUser);
        }, [user]);
      
        return (
          <div>
            Testing User Component
            <br />
            User Name: {user.name}
            <br />
            User Email: {user.email}
            <br />
            User Area: {area}
            <br/>
            User Favorite Food: {user.meta.favoriteFood as string}
          </div>
        );
      };`
    },
    {
      id: 6,
      title: "React with TypeScript - Class Components",
      description: "Discover how to use TypeScript in React class components for better type safety.",
      codeExample: `import React, { useState, useEffect } from "react";
      
      type User = {
        user: {
          name: string;
          email?: string;
          age: number;
          isLoggedIn: boolean;
        };
        meta: Record<string, unknown>;
      };
      
      type UserProps = {
        area: string;
      };
      
      class UserComponent extends React.Component<UserProps, User> {
        static defaultProps = {
          area: "chicago",
        };
        constructor(props: UserProps) {
          super(props);
          this.state = {
            user: {
              name: "diana",
              age: 32,
              isLoggedIn: true,
            },
            meta: {
              role: "editor",
              subscribed: true,
            },
          };
        }
      
        componentDidMount(): void {
          const metaObject = {
            role: "admin",
            subscribed: false,
          };
      
          const fetchedUser = {
            name: "sonya blade",
            email: "sonya@gmail.com",
            age: 72,
            isLoggedIn: true,
          };
          this.setState({ ...this.state, user: fetchedUser });
          this.setState({ meta: metaObject });
        }
      
        getNameOfUser = (u: User): string => {
          return u.user.name;
        };
      
        render(): React.ReactNode {
          let nameOfUser: string = this.state.user.name;
      
          return (
            <div>
              Hello World <br />
              Name: {this.state.user.name}
              <br />
              Email: {this.state.user.email}
              <br />
              <h3>Meta Info</h3>
              Role: {this.state.meta.role as string}
            </div>
          );
        }
      }
      `
    }
  ];

  // TypeScript: Function with typed parameters and return type
  const getDifficultyBadge = (sectionIndex: number): Difficulty => {
    if (sectionIndex < 2) return Difficulty.Beginner;
    if (sectionIndex < 3) return Difficulty.Intermediate;
    return Difficulty.Advanced;
  };

  // TypeScript: Event handler with proper typing
  const handleNextSection = (): void => {
    setCurrentSection((prev) => 
      prev < tutorialSections.length - 1 ? prev + 1 : 0
    );
  };

  const handlePrevSection = (): void => {
    setCurrentSection((prev) => 
      prev > 0 ? prev - 1 : tutorialSections.length - 1
    );
  };

  const currentTutorial = tutorialSections[currentSection];
  const difficulty = getDifficultyBadge(currentSection);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>🚀 TypeScript Tutorial 2025</h1>
      <p style={styles.subtitle}>Learn TypeScript fundamentals with React</p>
      
      <div style={styles.progressContainer}>
        <div style={styles.progressBar}>
          <div 
            style={{
              ...styles.progressFill,
              width: `${((currentSection + 1) / tutorialSections.length) * 100}%`
            }}
          />
        </div>
        <span style={styles.progressText}>
          Section {currentSection + 1} of {tutorialSections.length}
        </span>
      </div>

      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h2 style={styles.cardTitle}>{currentTutorial.title}</h2>
          <span style={{
            ...styles.badge,
            backgroundColor: difficulty === Difficulty.Beginner ? '#4CAF50' : 
                           difficulty === Difficulty.Intermediate ? '#FF9800' : '#f44336'
          }}>
            {difficulty}
          </span>
        </div>
        
        <p style={styles.description}>{currentTutorial.description}</p>
        
        <div style={styles.codeBlock}>
          <pre style={styles.code}>{currentTutorial.codeExample}</pre>
        </div>
      </div>

      <div style={styles.buttonContainer}>
        <button 
          style={styles.button} 
          onClick={handlePrevSection}
        >
          ← Previous
        </button>
        <button 
          style={{...styles.button, ...styles.primaryButton}} 
          onClick={handleNextSection}
        >
          Next →
        </button>
      </div>

      <div style={styles.footer}>
        <p>Built with React + TypeScript ❤️</p>
      </div>
    </div>
  );
};

// TypeScript: Typed styles object
const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    backgroundColor: '#1a1a2e',
    minHeight: '100vh',
    color: '#ffffff',
  },
  header: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '10px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    textAlign: 'center',
    color: '#a0a0a0',
    marginBottom: '30px',
  },
  progressContainer: {
    marginBottom: '30px',
  },
  progressBar: {
    height: '8px',
    backgroundColor: '#333',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    transition: 'width 0.3s ease',
  },
  progressText: {
    display: 'block',
    textAlign: 'center',
    marginTop: '8px',
    color: '#888',
    fontSize: '0.9rem',
  },
  card: {
    backgroundColor: '#16213e',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '24px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  cardTitle: {
    margin: 0,
    fontSize: '1.5rem',
    color: '#ffffff',
  },
  badge: {
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  description: {
    color: '#b0b0b0',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  codeBlock: {
    backgroundColor: '#0f0f23',
    borderRadius: '8px',
    padding: '16px',
    overflow: 'auto',
  },
  code: {
    margin: 0,
    color: '#00ff88',
    fontFamily: '"Fira Code", "Consolas", monospace',
    fontSize: '0.9rem',
    lineHeight: '1.5',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
  },
  button: {
    padding: '12px 24px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: '#333',
    color: '#ffffff',
    transition: 'all 0.2s ease',
  },
  primaryButton: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  footer: {
    textAlign: 'center',
    marginTop: '40px',
    color: '#666',
  },
};

export default TypeScriptTutorial;
