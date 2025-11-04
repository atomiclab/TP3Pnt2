import servicioProductos from '../../../servicios/productos.js'

export default {
  name: 'PequenoComercio',

  components: {
    // componentes hijos
  },

  props: {
    // ejemplo: titulo: { type: String, default: '' }
  },

  data() {
    return {
      usuarios: [],
      cargando: false,
      error: null,
    }
  },

  computed: {
    // propiedades calculadas
  },

  watch: {
    // observadores
  },

  methods: {
    async obtenerUsuarios() {
      this.cargando = true
      this.error = null
      try {
        const servicio = new servicioProductos()
        const usuarios = await servicio.getAll()
        this.usuarios = usuarios || []
      } catch (error) {
        this.error = 'Error al cargar los usuarios'
        console.error('Error al obtener usuarios:', error)
      } finally {
        this.cargando = false
      }
    },
  },

  created() {
    // hook de creación
  },
  mounted() {
    // hook de montaje
    this.obtenerUsuarios()
  },
  unmounted() {
    // hook de desmontaje
  }
}

