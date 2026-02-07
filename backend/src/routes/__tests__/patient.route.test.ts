import request from 'supertest'
import { App } from '../../app'

const app = new App().getExpressApp()

describe('Patients API', () => {
  let patientId: string

  it('should create a patient', async () => {
    const res = await request(app)
      .post('/api/patients')
      .send({ name: 'Joel Martins', age: 26, weight: 72.5, gener: 'MALE' })
      .expect(201)

    expect(res.body.success).toBe(true)
    expect(res.body.data.id).toBeDefined()
    patientId = res.body.data.id
  })

  it('should get all patients', async () => {
    const res = await request(app).get('/api/patients').expect(200)
    expect(res.body.success).toBe(true)
    expect(Array.isArray(res.body.data)).toBe(true)
  })

  it('should get a patient by id', async () => {
    const res = await request(app).get(`/api/patients/${patientId}`).expect(200)
    expect(res.body.success).toBe(true)
    expect(res.body.data.id).toBe(patientId)
  })

  it('should update a patient', async () => {
    const res = await request(app)
      .put(`/api/patients/${patientId}`)
      .send({ weight: 75 })
      .expect(200)
    expect(res.body.success).toBe(true)
    expect(res.body.data.weight).toBe(75)
  })

  it('should delete a patient', async () => {
    const res = await request(app)
      .delete(`/api/patients/${patientId}`)
      .expect(200)
    expect(res.body.success).toBe(true)
  })
})
