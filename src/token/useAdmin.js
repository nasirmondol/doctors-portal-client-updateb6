import { useEffect, useState } from "react";

const useAdmin = email => {
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data.email)
                    setIsAdminLoading(false)
                })
        }
    }, [email, isAdmin])
    return [isAdmin, isAdminLoading]
}
export default useAdmin;