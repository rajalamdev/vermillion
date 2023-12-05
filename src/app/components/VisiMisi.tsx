const VisiMisi = () => {
  return (
    <div className="bg-orange bg-orange-500 py-28 px-16">
        <div className="max-w-6xl mx-auto">
            <h1 className="text-center text-3xl font-semibold">Visi & Misi</h1>
            <div className="grid grid-cols-2 gap-8 mt-16 text-justify text-base font-normal">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Visi</h2>
                    <p>Menjadikan HMIF sebagai wadah bagi anggota maupun calon anggota untuk mengembangkan diri dalam bidang akademik maupun non akademik dan menjadikan HMIF ITI menjadi organisasi yang aktif solutif dan produktif secara internal maupun eksternal demi terwujudnya Tri Dharma Perguruan Tinggi</p>
                </div>
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Misi</h2>
                    <p className="flex flex-col gap-4">
                        <span>1.Meningkatkan kualitas secara akademik setiap anggota maupun calon anggota HMIF ITI</span>
                        <span>2.Meningkatkan kualitas kegiatan sosial mahasiswa</span>
                        <span>3.Membangun jaringan & kemitraan dengan pihak kampus organisasi kemahasiswaan lain & masyarakat umum</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VisiMisi