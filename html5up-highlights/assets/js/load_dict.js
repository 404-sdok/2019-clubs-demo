function change_exam() {
    for (i = 0; i < disp_dict[count].length; i++) { 
        document.getElementById(disp_dict[count][i][0]).innerHTML = disp_dict[count][i][1];
    }
    count ++;
    if (count > disp_dict.length) {
        count = 0;
    }
}

change_exam();