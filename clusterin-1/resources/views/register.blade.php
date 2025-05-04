<!--template awal dari bootstrap-->
<!doctype html>
<html lang="en">


<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Register</title>

    <!---link google font-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
        rel="stylesheet">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">

    <!---rute ke style.css-->
    <link rel="stylesheet" href="css/style.css">
</head>


<body>
    <nav class="navbar">
        <div class="container d-flex justify-content-center">
            <a class="navbar-brand">
                <img src="{{ asset('images/logoRemove.png') }}" alt="Logo" width="88" height="85">
            </a>
        </div>
    </nav>

    <div class="container d-flex flex-column justify-content-center align-items-center">
        <div style="width: 100%; max-width: 400px;" class="text-start">

        </div>
        <form style="width: 90%; max-width: 400px;">
            <h1 class="header mb-3">Register</h1>
            <div class="form-floating mb-2">
                <input type="text" class="form-control" style="border-radius: 16px;" id="floatingNama"
                    placeholder="NIK">
                <label for="floatingNama">Nama </label>
            </div>
            <div class="form-floating mb-2">
                <input type="email" class="form-control" style="border-radius: 16px" ; id="floatingEmail"
                    placeholder="Email">
                <label for="floatingEmail">Email</label>
            </div>
            <div class="form-floating mb-2">
                <input type="password" class="form-control" style="border-radius: 16px" ; id="floatingPassword"
                    placeholder="Password">
                <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating mb-2">
                <input type="text" class="form-control" style="border-radius: 16px" ; id="floatingNIK"
                    placeholder="NIK">
                <label for="floatingNIK">NIK</label>
            </div>
            <div class="form-floating mb-2">
                <input type="text" class="form-control" style="border-radius: 16px" ; id="floatingAlamatRumah"
                    placeholder="AlamatRumah">
                <label for="floatingAlamatRumah">Alamat Rumah</label>
            </div>
            <div class="form-floating mb-2">
                <input type="text" class="form-control" style="border-radius: 16px" ; id="floatingNoTelp"
                    placeholder="NomorTelp">
                <label for="floatingNoTelp">No. Telp</label>
            </div>

            <div class="text-end mb-3">
                <button type="submit" class="btn btn-primary">Sign Up</button>
            </div>

        </form>
    </div>
    <div class="container paragraf-semiMini d-flex justify-content-center align-items-center">
        Sudah punya akun? <a href="#" style="font-weight: var(--fwbold); color:white;">Register</a>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
        crossorigin="anonymous"></script>


</body>

</html>