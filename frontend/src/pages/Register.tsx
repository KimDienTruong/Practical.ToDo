import { RegisterForm } from "../components/forms/RegisterForm";

export const Register = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Register</h1>
            <RegisterForm />
        </div>
    );
}