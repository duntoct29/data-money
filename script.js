window.onload=function(){
    document.querySelector('.submit_data').onclick=function(e){
       e.preventDefault();
       let money = document.getElementById('money');
       let money_data=money.value;
       let name=document.getElementsByName('name');
       let name_data='';
            for(var i=0;i<name.length;i++){
                if(name[i].checked===true){
                    name_data=name_data + `{`+ name[i].value +`}`;
                }
            }
       let per_oke=document.getElementsByName('per_oke');
        let per_oke_data='';
            for(var i=0;i<per_oke.length;i++){
                if(per_oke[i].checked===true){
                    per_oke_data=per_oke_data + `{`+ per_oke[i].value +`}`;
                }
            }
        let note=document.getElementById('note');
        let note_data=note.value;
        if(money_data.length>0&&name_data.length>0){
            alert('Đẩy dữ liệu lên sheet thành công. Reload trang để dữ liệu được cập nhật');
            let data={
                'entry.1648720826': name_data,
                'entry.369194391': money_data,
                'entry.1036437756':per_oke_data,
                'entry.1606265024':note_data,
            }
            let queryString= new URLSearchParams(data);
                queryString=queryString.toString()
            const xhr = new XMLHttpRequest();
            xhr.open("POST", 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSejOnQZw_Ity2h1ra2HGqz7jCcfKcfjTo0lPvwZiY1fV_fBQQ/formResponse', true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(queryString);
    
            name.value="";
            per_oke.value="";
            money.value="";
            note.value="";
        }else{
            alert('Vui lòng nhập đầy đủ mục (*) bắt buộc.')
        }
    }
}
$(document).ready(function(){
    $(".reload").click(function(){
        location.reload(true);
    });
});