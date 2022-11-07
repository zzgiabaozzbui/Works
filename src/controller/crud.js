import axios from "axios";

export const updateFinish = (id, finishRef)=>{
    const object = {
        finish: 0
    }
    object.finish = finishRef.current.checked === true ? 1 : 0;
    axios.put(`http://localhost:3001/updateWork?id=${id}`, object)
    .then(function (response) {
      alert("Đã cập nhật công việc");
      
    })
    .catch(function (error) {
      
        alert("Cập nhật công việc thất bại");
        console.log(error);
    });
}

export const deleteWork = (id,dele)=>{
    axios.delete(`http://localhost:3001/deleteWork?id=${id}`)
    .then(function (response) { 
        alert(`Đã xóa công việc ${id}`);
        dele();

    })
    .catch(function (error) {
      
        alert("Xóa công việc thất bại");
        console.log(error);
    });
}

