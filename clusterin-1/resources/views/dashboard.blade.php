<!--template awal dari bootstrap-->
<!doctype html>
<html lang="en">


<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Dashboard</title>

    <!---link google font-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">


    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">

    <!---rute ke style.css-->
    <link rel="stylesheet" href="css/style.css">
</head>


<body class="bg">
    <nav class="navbar navbar-expand-lg mb-4"
        style="background: var(--biruBG1); border-bottom-left-radius: 10px; border-bottom-right-radius: 10px">
        <div class="container">
            <a class="navbar-brand header-2">Dashboard</a>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="paragraf-medium me-2" href="#">Hi, Magna</a>
                    <img src="{{ asset('images/Akun.png') }}" alt="akun" width="30" height="30">
                </li>
            </ul>
        </div>
    </nav>

    <section class="kotak_warga mb-4">
        <div class="container">
            <div class="row mx-auto">
                <h1 class="header-3 text-start mb-1">Kotak Warga</h1>
                <div class="col-6 mb-3 mb-sm-0">
                    <div class="card">
                        <div class="card-header">
                            Daftar Surat Permohonan
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5 class="card-title">Nama Warga</h5>
                                <span class="badge-status menunggu">Menunggu</span>
                            </div>
                            <p class="card-text" style="font-size: 10px">Tanggal Permohonan</p>
                            <p class="card-text" style="font-size: 11px">Jenis Permohonan</p>
                            <a class="card-text" style="font-size: 11px" href="#">Lihat Lainnya</a>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card">
                        <div class="card-header">
                            Daftar Surat Pengaduan
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5 class="card-title">Nama Warga</h5>
                                <span class="badge-status menunggu">Menunggu</span>
                            </div>
                            <p class="card-text" style="font-size: 10px">Tanggal Pengaduan</p>
                            <p class="card-text" style="font-size: 11px">Jenis Pengaduan</p>
                            <a class="card-text" style="font-size: 11px" href="#">Lihat Lainnya</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="data_tamu">
        <div class="container">
            <div class="row mx-auto">
                <h1 class="header-3 text-start mb-1">Data Tamu</h1>
                <div class="col-6 mb-3 mb-sm-0">
                    <div class="card">
                        <div class="card-header">
                            Check-In
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Nama Warga</h5>
                            <p class="card-text" style="font-size: 10px">Alamat tujuan</p>
                            <p class="card-text" style="font-size: 11px">Waktu</p>
                            <p class="card-text" style="font-size: 11px">Tujuan</p>
                            <a class="card-text" style="font-size: 11px" href="#">Lihat Lainnya</a>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card">
                        <div class="card-header">
                            Check-Out
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Nama Warga</h5>
                            <p class="card-text" style="font-size: 10px">Alamat tujuan</p>
                            <p class="card-text" style="font-size: 11px">Waktu</p>
                            <p class="card-text" style="font-size: 11px">Tujuan</p>
                            <a class="card-text" style="font-size: 11px" href="#">Lihat Lainnya</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="management_User">
        <div class="container">
            <h1 class="header-3 text-start mt-3 mb-1">Management User</h1>
            <div class="card">
                <div class="card-body">
                    <ol class="list-group list-group-numbered">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <div class="d-flex align-items-center" style="min-width: 0; flex-grow: 1;">
                                <img src="{{ asset('images/female_icon.png') }}" alt="female" width="27" height="27"
                                    class="me-1">
                                <span class="text-truncate">{{ $user->name ?? 'Anonymuos' }}</span>
                            </div>
                            <span class="badge text-bg-primary rounded-pill">
                                Verifikasi
                            </span>
                            <a href="#" class="ms-2 text-decoration-none">
                                Details
                            </a>
                        </li>

                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <div class="d-flex align-items-center" style="min-width: 0; flex-grow: 1;">
                                <img src="{{ asset('images/male_icon.png') }}" alt="male" width="27" height="27"
                                    class="me-1">
                                <span class="text-truncate">{{ $user->name ?? 'Anonymuos' }}</span>
                            </div>
                            <span class="badge text-bg-primary rounded-pill">
                                Menunggu
                            </span>
                            <a href="#" class="ms-2 text-decoration-none">
                                Details
                            </a>
                        </li>


                    </ol>
                    <li class="list-group-item d-flex justify-content-center align-items-center mt-1">

                        <a href="#">Lihat lainnya</a>

                    </li>
                </div>
            </div>

        </div>
    </section>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
        crossorigin="anonymous"></script>


</body>

</html>