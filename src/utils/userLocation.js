
export const fetchUserCurrentLocation = () => {
    try {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
              reject(new Error("Geolocation is not supported by your browser"));
            } else {
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  const { latitude, longitude } = position.coords;
                  resolve({ latitude, longitude });
                },
                (error) => {
                  switch (error.code) {
                    case error.PERMISSION_DENIED:
                      reject(new Error("User denied the request for Geolocation"));
                      break;
                    case error.POSITION_UNAVAILABLE:
                      reject(new Error("Location information is unavailable"));
                      break;
                    case error.TIMEOUT:
                      reject(new Error("The request to get user location timed out"));
                      break;
                    default:
                      reject(new Error("An unknown error occurred"));
                      break;
                  }
                }
              );
            }
          });
    } catch (e) {
        console.log(e);
        return false;
    }
}