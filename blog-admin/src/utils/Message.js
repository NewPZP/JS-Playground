import { ElMessage } from "element-plus";

const message = {
    error: (msg) => {
        ElMessage({
            message: msg,
            type: "error",
            duration: 2 * 1000,
        });
    },
    success: (msg) => {
        ElMessage({
            message: msg,
            type: "success",
            duration: 2 * 1000,
        });
    },
    warning: (msg) => {
        ElMessage({
            message: msg,
            type: "warning",
            duration: 2 * 1000,
        });
    }
}

export default message