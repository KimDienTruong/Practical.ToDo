import { LoginForm } from "../components/forms/LoginForm";

export const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Login</h1>
            <LoginForm />
        </div>
    );
}   