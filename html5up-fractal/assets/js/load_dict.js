function change_exam() {
    for (i = 0; i < disp_dict[count].length; i++) { 
        document.getElementById(disp_dict[count][i][0]).innerHTML = disp_dict[count][i][1];
    }
}

change_exam();