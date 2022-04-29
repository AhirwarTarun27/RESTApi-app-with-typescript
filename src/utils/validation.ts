const formatErrors = (errorArray:any) => {
      return errorArray.map((error:any) => {
            return {
                  message: error.msg,            }
      })
}

module.exports = {formatErrors}