const getContainerStyle = (isDarkMode) => ({
    textAlign: 'center',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    maxWidth: '400px',
    width: '100%',
    transition: 'background-color 0.3s, color 0.3s',
    backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
    color: isDarkMode ? '#ffffff' : '#343a40',
});

const getInputStyle = (isDarkMode, inputType) => {
    const commonStyles = {
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #ced4da',
        borderRadius: '4px',
        outline: 'none',
        backgroundColor: isDarkMode ? '#333' : '#ffffff',
        color: isDarkMode ? '#ffffff' : '#343a40',
    }
    if (inputType === 'submit') {
        return {
            ...commonStyles,
            cursor: 'pointer',
        };
    }
    return commonStyles
    
};

const getUlStyle = (isDarkMode) => ({
    listStyleType: 'none',
    padding: '0',
    backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
});

const getLiStyle = (isDarkMode) => ({
    backgroundColor: isDarkMode ? '#333' : '#ffffff',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(255, 255, 255, 0.1)',
    color: isDarkMode ? '#ffffff' : 'black',
});

const getDeleteBtnStyle = (isDarkMode) => ({
    backgroundColor: isDarkMode ? '#dc3545' : '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '5px',
    cursor: 'pointer',
    borderRadius: '4px',
});

const geth1Style = (isDarkMode) => ({
    backgroundColor: isDarkMode ? '' : '#ffffff',
})

export {
    getContainerStyle,
    getInputStyle,
    getUlStyle,
    getLiStyle,
    getDeleteBtnStyle,
    geth1Style,
};
